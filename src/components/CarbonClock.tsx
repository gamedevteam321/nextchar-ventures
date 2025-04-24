import React, { useEffect, useState } from 'react';

interface TimeLeft {
  years: string;
  months: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
}

const CarbonClock: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: '00',
    months: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    milliseconds: '00'
  });
  const [carbonBudget, setCarbonBudget] = useState<string>('0');

  const secondsPerYear = 3600 * 24 * 365.25;
  const startDate = new Date(2021, 0, 1, 0, 0, 0);
  const initialAnnualEmissions = 42.2 * 1e+9;
  const annualGrowthRate = 1.000;
  const totalBudget = 1111 * 1e+9; // For 2°C scenario

  const getDaysInMonth = (month: number, year: number = 2015): number => {
    const currmon = new Date(year, month);
    const nextmon = new Date(year, month + 1);
    return Math.floor((nextmon.getTime() - currmon.getTime()) / (24 * 3600 * 1000));
  };

  const sPassed = (): number => {
    const now = new Date();
    return Math.floor((now.getTime() - startDate.getTime()) / 1000);
  };

  const getCurrentEmissionsPerS = (): number => {
    return (initialAnnualEmissions / secondsPerYear) * 
           Math.pow(annualGrowthRate, sPassed() / secondsPerYear);
  };

  const getBudgetLeft = (): number => {
    let budgetUsed;
    if (annualGrowthRate === 1) {
      budgetUsed = (sPassed() / secondsPerYear) * initialAnnualEmissions;
    } else {
      budgetUsed = (initialAnnualEmissions / Math.log(annualGrowthRate)) * 
                   (Math.pow(annualGrowthRate, sPassed() / secondsPerYear) - 1);
    }
    return totalBudget - budgetUsed;
  };

  const getDoomTime = (): Date => {
    let yearsRemaining;
    if (annualGrowthRate === 1) {
      yearsRemaining = totalBudget / initialAnnualEmissions;
    } else {
      yearsRemaining = Math.log((totalBudget / initialAnnualEmissions) * 
                      Math.log(annualGrowthRate) + 1) / Math.log(annualGrowthRate);
    }
    return new Date(startDate.getTime() + yearsRemaining * secondsPerYear * 1000);
  };

  const countdownTime = (target: Date): TimeLeft => {
    const now = new Date();
    let yd, md, dd, hd, nd, sd, ms;

    if ((target.getTime() - now.getTime()) > 0) {
      yd = target.getFullYear() - now.getFullYear();
      md = target.getMonth() - now.getMonth();
      dd = target.getDate() - now.getDate();
      hd = target.getHours() - now.getHours();
      nd = target.getMinutes() - now.getMinutes();
      sd = target.getSeconds() - now.getSeconds();
    } else {
      yd = -target.getFullYear() + now.getFullYear();
      md = -target.getMonth() + now.getMonth();
      dd = -target.getDate() + now.getDate();
      hd = -target.getHours() + now.getHours();
      nd = -target.getMinutes() + now.getMinutes();
      sd = -target.getSeconds() + now.getSeconds();
    }

    // Handle negative values
    while (true) {
      if (md < 0) { yd--; md += 12; }
      if (dd < 0) { md--; dd += getDaysInMonth(now.getMonth() - 1, now.getFullYear()); }
      if (hd < 0) { dd--; hd += 24; }
      if (nd < 0) { hd--; nd += 60; }
      if (sd < 0) { nd--; sd += 60; }
      if (md >= 0 && yd >= 0 && dd >= 0 && hd >= 0 && nd >= 0 && sd >= 0) break;
    }

    ms = (target.getTime() - now.getTime()) > 0 
      ? (99 - parseInt(now.getMilliseconds().toString().slice(0, 2))).toString()
      : now.getMilliseconds().toString().slice(0, 2);

    return {
      years: yd.toString().padStart(2, '0'),
      months: md.toString().padStart(2, '0'),
      days: dd.toString().padStart(2, '0'),
      hours: hd.toString().padStart(2, '0'),
      minutes: nd.toString().padStart(2, '0'),
      seconds: sd.toString().padStart(2, '0'),
      milliseconds: ms.toString().padStart(2, '0')
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const doomTime = getDoomTime();
      setTimeLeft(countdownTime(doomTime));
      setCarbonBudget(getBudgetLeft().toFixed(0));
    }, 1);

    return () => clearInterval(timer);
  }, []);

  const isNegativeBudget = parseInt(carbonBudget) <= 0;
  const textColor = isNegativeBudget ? 'text-red-500' : 'text-white';

  return (
    <div className="w-full max-w-4xl mx-auto text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-white">
        Time left to limit global warming to a maximum of 2°C
      </h2>
      
      <div className="grid grid-cols-7 gap-2 mb-8">
        <div className="text-center">
          <div className={`text-2xl sm:text-4xl font-bold ${textColor}`}>{timeLeft.years}</div>
          <div className="text-sm text-gray-300">Years</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl sm:text-4xl font-bold ${textColor}`}>{timeLeft.months}</div>
          <div className="text-sm text-gray-300">Months</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl sm:text-4xl font-bold ${textColor}`}>{timeLeft.days}</div>
          <div className="text-sm text-gray-300">Days</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl sm:text-4xl font-bold ${textColor}`}>{timeLeft.hours}</div>
          <div className="text-sm text-gray-300">Hours</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl sm:text-4xl font-bold ${textColor}`}>{timeLeft.minutes}</div>
          <div className="text-sm text-gray-300">Minutes</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl sm:text-4xl font-bold ${textColor}`}>{timeLeft.seconds}</div>
          <div className="text-sm text-gray-300">Seconds</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl sm:text-4xl font-bold ${textColor}`}>{timeLeft.milliseconds}</div>
          <div className="text-sm text-gray-300">MS</div>
        </div>
      </div>

      <div>
        <h3 className="text-lg text-gray-300 mb-2">Remaining CO₂ budget</h3>
        <div className={`text-2xl sm:text-3xl font-bold ${textColor}`}>
          {isNegativeBudget ? 'Exhausted by: ' : ''}
          {Math.abs(parseInt(carbonBudget)).toLocaleString()} tonnes
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-400">
        Source: MCC Berlin
      </div>
    </div>
  );
};

export default CarbonClock; 