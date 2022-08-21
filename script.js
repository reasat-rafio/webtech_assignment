const logOutBtn = document.querySelector(".log_out_warpper");
const dashboardStatusContainer = document.querySelector(".dashboard > .status");

logOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logged out");
});
