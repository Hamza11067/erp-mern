import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Boxes,
  Users,
  UserRound,
  BarChart3,
  ShieldCheck,
  Building2,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.data.token);

      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const features = [
    {
      icon: <Boxes className="h-5 w-5" />,
      text: "Inventory Management",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Customer Management",
    },
    {
      icon: <UserRound className="h-5 w-5" />,
      text: "Employee Management",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      text: "Reports & Analytics",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      text: "Business Operations",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      text: "Secure & Reliable",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-14 text-white">
          <div>
            <h1 className="text-5xl font-bold">ERP System</h1>

            <p className="mt-5 max-w-md text-slate-300 text-lg leading-relaxed">
              Manage your business efficiently from one centralized platform.
            </p>

            <div className="mt-12 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-4 text-lg"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm text-slate-400">
            ERP System • Version 1.0
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-6">
          <Card className="w-full max-w-md shadow-xl dark:border-slate-800">
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold">Welcome Back</h2>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Sign in to continue to your dashboard.
                </p>
              </div>

              <div className="space-y-5">
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}