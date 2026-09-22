import { NextResponse } from "next/server";
export const dynamic = "force-static";
type UpdateType = {
  version: string;
  new?: string[];
  improved?: string[];
  fixed?: string[];
};

export async function GET() {
  const update: UpdateType = {
    version: "0.1.2",
    new: ["Solidjs as Frontend", "Optimize perfomance"],
    improved: ["Improved UI added new motion"],
    fixed: ["Fixed store bug"],
  };

  return NextResponse.json(update);
}
