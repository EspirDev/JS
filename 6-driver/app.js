 const hasLicence = true;
 const age = 18;
 const isDrunk = false;

 let output = hasLicence && age >= 18  && !isDrunk ? 'Водитель может ехать' : 'Водитель не может ехать';
 console.log(output);