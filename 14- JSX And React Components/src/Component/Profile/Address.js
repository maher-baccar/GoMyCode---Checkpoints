import React from 'react';
function address() {
let adresse = "8 rue el khadhra";
let city = "Gabès";
let country ="Tunisia";
let zip ="6001";
return (
  <div>
    <p>
      {adresse} ,{city},{country},{zip}
      </p>
  </div>
);
}
export default address;
