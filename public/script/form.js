//Temp...
function elkuld()
{
    let nev = document.getElementById("name").value, email = document.getElementById("email").value, phone = document.getElementById("phone").value,
        subject = document.getElementById("subject").value, comment = document.getElementById("comment").value;
    if (nev && email && phone && subject && comment) {
        alert(`Név: ${nev}\nEmail: ${email}\nTelefon: ${phone}\n\nTárgy: ${subject}\nÜzenet: ${comment}`);
    }
    else {
       alert('Kérlek tölts ki minden mezőt!'); 
    }
}