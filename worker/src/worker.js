export default {
  async fetch() {
    return new Response(JSON.stringify({ answer: "Backend not deployed yet." }), {
      headers: { "content-type": "application/json" }
    });
  }
};
