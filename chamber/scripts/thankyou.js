const params = new URLSearchParams(window.location.search);

document.getElementById("results").innerHTML = `
<p><strong>First Name:</strong> ${params.get("first")}</p>

<p><strong>Last Name:</strong> ${params.get("last")}</p>

<p><strong>Email:</strong> ${params.get("email")}</p>

<p><strong>Phone:</strong> ${params.get("phone")}</p>

<p><strong>Organization:</strong> ${params.get("organization")}</p>

<p><strong>Date Submitted:</strong> ${params.get("timestamp")}</p>
`;