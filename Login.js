function Login() {
    Name_var = document.getElementById("Name_input").value ;
    City_name = document.getElementById("City_input").value ;
    Email_id = document.getElementById("Email_input").value ;
    Phone_no = document.getElementById("PhoneNo_input").value ;
    localStorage.setItem("name",Name_var);
    localStorage.setItem("City",City_name);
    localStorage.setItem("Email",Email_id);
    localStorage.setItem("Phone_number",Phone_no);
    window.location = "Donate.html" ;
}