import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function SurflineContainer() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <header className="space-y-1 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          Current Surf Conditions
        </h1>
        <p className="text-sm text-gray-500">Local time: 2:45 PM MST</p>
      </header>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Condition Rating</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <span className="text-5xl font-extrabold text-amber-600 tracking-wide">
            FAIR
          </span>
          <div className="flex space-x-1">
            <div className="w-6 h-6 bg-amber-600 rounded-full" />
            <div className="w-6 h-6 bg-amber-600 rounded-full" />
            <div className="w-6 h-6 bg-amber-400 rounded-full" />
            <div className="w-6 h-6 bg-amber-200 rounded-full" />
            <div className="w-6 h-6 bg-amber-200 rounded-full" />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Surf Height</CardTitle>
            <CardDescription>Waist to shoulder</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-sky-700">3-4ft+</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Swell</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">3-4 ft</p>
                <p className="text-sm text-gray-500">Period: 12s</p>
              </div>
              <Badge variant="secondary">ENE</Badge>
              <span className="text-gray-400 text-sm">45°</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">1-2 ft</p>
                <p className="text-sm text-gray-500">Period: 9s</p>
              </div>
              <Badge variant="secondary">ESE</Badge>
              <span className="text-gray-400 text-sm">70°</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wind</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">8 mph</p>
                <p className="text-sm text-gray-500">Gusts: 12 mph</p>
              </div>
              <Badge variant="secondary">NW</Badge>
            </div>
            <div className="w-full h-20 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-xs">
              Mini Wind Map Placeholder
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-3xl font-bold text-blue-600">4.5 ft</p>
            <div className="w-full h-16 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-xs">
              Tide Graph Placeholder
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Low: 6:00 AM</span>
              <span>High: 12:30 PM</span>
              <span>Low: 6:45 PM</span>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Temperature</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-semibold text-lg">Water</p>
              <p className="text-2xl text-blue-600">68°F</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Air</p>
              <p className="text-2xl text-orange-600">75°F</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Recommendations</p>
              <p className="text-sm text-gray-600">Wetsuit: 3/2mm</p>
              <p className="text-sm text-gray-600">SPF 30+</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/matt-kibby.jpg" alt="Matt Kibby" />
            </Avatar>
            <div>
              <CardTitle className="text-lg font-semibold">
                Missoula, MT Forecast
              </CardTitle>
              <CardDescription className="text-xs text-gray-500">
                Last updated: 1 hour ago
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm leading-relaxed">
              Light offshore winds with small but consistent surf. Expect waist to
              shoulder high waves with occasional sets up to head high in the
              afternoon.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Days to Watch</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center justify-between">
                <span>Friday, June 14</span>
                <Badge variant="destructive" className="text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zM12 11v2m0 4v.01"
                    />
                  </svg>
                </Badge>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunday, June 16</span>
                <Badge variant="destructive" className="text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zM12 11v2m0 4v.01"
                    />
                  </svg>
                </Badge>
              </li>
              <li className="flex items-center justify-between">
                <span>Wednesday, June 19</span>
                <Badge variant="destructive" className="text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zM12 11v2m0 4v.01"
                    />
                  </svg>
                </Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
