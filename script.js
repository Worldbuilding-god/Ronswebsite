function darkMode(){
    $("html").toggleClass("darkhtml");
    $("nav").toggleClass("darknav");
};

$(function() {
    function calculateAge() {
      var birthDate = new Date(2007, 12, 11); // December 11, 2007
      var today = new Date();

      var age = today.getFullYear() - birthDate.getFullYear();
      var monthDiff = today.getMonth() - birthDate.getMonth();
      var dayDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      return age;
    }
    // Display the result on the page using jQuery
    var age = calculateAge();
    $('#age').append(age);
});