import { useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign, Percent } from "lucide-react";
import Header from "./components/Header";

const TipCalculator = () => {
  const [amount, setAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTip = () => {
    const billAmount = parseFloat(amount);
    const tipPercent = parseFloat(tipPercentage);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
      alert("Please enter valid numbers");
      return;
    }

    const calculatedTip = billAmount * (tipPercent / 100);
    const total = billAmount + calculatedTip;

    setTipAmount(calculatedTip.toFixed(2));
    setTotalAmount(total.toFixed(2));
  };

  return (
    <>
      <Header />
      <Card className="w-full max-w-md mx-auto mt-10 overflow-hidden shadow-lg">
        <CardHeader className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
          <CardTitle className="text-3xl font-bold flex items-center justify-center">
            <Calculator className="mr-3" size={32} />
            Tip Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="space-y-6">
            <div className="relative">
              <label
                htmlFor="billAmount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Bill Amount
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="billAmount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="pl-10 block w-full border-2 border-purple-200 focus:ring-indigo-500 focus:border-indigo-500 rounded-md transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="tipPercentage"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tip Percentage
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Percent className="h-5 w-5 text-gray-400" />
                </div>
                <Select onValueChange={setTipPercentage}>
                  <SelectTrigger
                    id="tipPercentage"
                    className="pl-10 w-full border-2 border-purple-200 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  >
                    <SelectValue placeholder="Select tip percentage" />
                  </SelectTrigger>
                  <SelectContent>
                    {[5, 10, 15, 20, 25, 30].map((percent) => (
                      <SelectItem key={percent} value={percent.toString()}>
                        {percent}%
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              onClick={calculateTip}
              className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md"
            >
              Calculate Tip
            </Button>
            {tipAmount > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-lg shadow-inner">
                <p className="text-xl font-semibold text-indigo-700 mb-3">
                  Tip Amount:{" "}
                  <span className="text-pink-600">${tipAmount}</span>
                </p>
                <p className="text-xl font-semibold text-indigo-700">
                  Total Amount:{" "}
                  <span className="text-pink-600">${totalAmount}</span>
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TipCalculator;
