const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {
  let request = await fetch(
    "https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"
  );
  let data = await request.json();
  displayContactList(data);
  console.log(data);
};

getRegistrationData();

const displayContactList = function (data) {
  for (let student of data) {
    if (student.registered === "no") {
      let li = document.createElement("li");
      li.innerText = student.name;
      notRegistered.append(li);
    }
  }
};

getRegistrationData();
