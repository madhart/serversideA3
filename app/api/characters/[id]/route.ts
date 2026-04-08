import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { connectToDatabase } from "../../db";


export async function GET(request: NextRequest, context: any) {
    const { db } = await connectToDatabase();
    const awaitedParams = await context.params;
    const characterId = awaitedParams.id;

    console.log("id", characterId);
 
    const character = await db.collection("characters").findOne({ id: parseInt(characterId) });

    return new Response(JSON.stringify(character), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
