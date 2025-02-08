const pool = require("../Helper/postgres");

async function fetchData() {
  try {
    const result = await pool.query("SELECT * FROM public.user_log");
    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
}

async function main() {
  try {
    console.log("Starting application...");

    // Simulating an async operation
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    var aa = await fetchData();

    console.log(aa);
    console.log("Async operation completed!");
  } catch (error) {
    console.error("Error in main:", error);
  }
}

// Call the async main function
main();
