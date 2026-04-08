import { headers } from "next/headers";
import { connectToDatabase } from "../db";
import { NextRequest } from "next/server";

export async function GET() {
    try{
    const { db } = await connectToDatabase();
    const characters = await db.collection("characters").find({}).toArray();

    return new Response(JSON.stringify(characters), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
} catch (err){
        console.error("REAL ERROR:", err);

        return new Response(JSON.stringify({ error: "Server crashed" }), {
            status: 500,
        });
}
}