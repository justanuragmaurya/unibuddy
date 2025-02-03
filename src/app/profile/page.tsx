'use client';

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { Mail, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
  avatar: string | null;
  updatedAt: string;
}

export default function Profile() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      setIsLoading(true);
      setError(null);
      
      fetch('/api/user')
        .then(async (res) => {
          if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.error || 'Failed to fetch user data');
          }
          return res.json();
        })
        .then(data => {
          if (!data) throw new Error('No data received');
          setUserData(data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [session]);

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Not Signed In</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">Please sign in to view your profile</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={session.user.image || ''} alt={session.user.name || ''} />
                <AvatarFallback className="text-lg">
                  {session.user.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl font-bold">{session.user.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>{session.user.email}</span>
              </div>
              {isLoading ? (
                <div className="text-center text-muted-foreground">
                  Loading user data...
                </div>
              ) : error ? (
                <div className="text-center text-red-500">
                  {error}
                </div>
              ) : userData && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>Member since {new Date(userData.updatedAt).toLocaleDateString()}</span>
                </div>
              )}
            </div>

            <div className="pt-6">
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}