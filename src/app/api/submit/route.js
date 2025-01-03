export async function POST(req) {
  try {
    const body = await req.json();
    const { item } = body;

    if (!item) {
      return new Response(JSON.stringify({ error: "No item selected" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    console.log("Item received:", item);

    return new Response(
      JSON.stringify({ message: `Item "${item}" submitted successfully.` }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
