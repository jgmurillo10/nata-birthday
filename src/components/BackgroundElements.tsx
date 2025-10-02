"use client";

export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large isomorphic shapes */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-orange-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />

      <div
        className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-bl from-red-200/40 to-amber-300/30 rotate-45 blur-2xl animate-bounce"
        style={{ animationDuration: "6s" }}
      />

      <div
        className="absolute bottom-1/3 -left-16 w-64 h-64 bg-gradient-to-tr from-orange-300/40 to-yellow-200/30 rounded-3xl blur-xl animate-pulse"
        style={{ animationDuration: "5s" }}
      />

      {/* Medium geometric shapes */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-amber-100/60 to-orange-100/40 rotate-12 rounded-2xl blur-lg animate-float" />

      <div
        className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-l from-red-100/50 to-amber-200/35 rounded-full blur-lg animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Small accent shapes */}
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200/50 to-orange-200/40 transform rotate-45 blur-sm animate-pulse"
        style={{ animationDuration: "3s" }}
      />

      <div
        className="absolute bottom-1/2 left-1/3 w-32 h-32 bg-gradient-to-tl from-amber-300/40 to-red-200/30 rounded-xl blur-md animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating particles */}
      <div
        className="absolute top-20 left-1/2 w-16 h-16 bg-gradient-to-r from-orange-300/60 to-amber-300/50 rounded-full blur-sm animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "0.5s" }}
      />

      <div
        className="absolute bottom-32 right-1/4 w-12 h-12 bg-gradient-to-l from-red-300/50 to-orange-300/40 rounded-full blur-sm animate-pulse"
        style={{ animationDuration: "2s" }}
      />

      {/* Travel-themed isomorphic elements */}
      <div className="absolute top-1/4 left-1/2 w-56 h-56 bg-gradient-to-br from-amber-200/25 to-orange-300/20 rotate-30 rounded-lg blur-xl animate-slow-spin" />

      <div
        className="absolute bottom-1/3 right-1/2 w-36 h-36 bg-gradient-to-tr from-yellow-200/40 to-red-200/30 -rotate-12 blur-lg animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Subtle geometric patterns */}
      <div className="absolute top-16 right-20 w-28 h-28 bg-gradient-to-r from-amber-200/30 to-orange-200/25 rotate-45 rounded-lg blur-md animate-drift" />

      <div
        className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-l from-red-200/35 to-yellow-200/30 rounded-full blur-sm animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Additional depth layers */}
      <div
        className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-br from-orange-100/20 to-amber-100/15 rotate-12 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div
        className="absolute bottom-1/4 right-1/6 w-44 h-44 bg-gradient-to-tl from-red-100/25 to-orange-100/20 -rotate-6 rounded-2xl blur-2xl animate-drift"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
