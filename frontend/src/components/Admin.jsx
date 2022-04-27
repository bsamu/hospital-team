import React, { useState } from "react";
import http from "axios";
import Hospital from "./Hospital";

function Admin(props) {
	const setMessage = props.setMessage;

	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [addressValue, setAddressValue] = useState("");
	const [cityValue, setCityValue] = useState("");
	const [countryValue, setCountryValue] = useState("");
	const [postcodeValue, setPostcodeValue] = useState("");
	const [taxIDValue, setTaxIDValue] = useState("");
	const [hospitalList, setHospitalList] = useState("");

	/*   const createHospital = async (event) => {
    event.preventDefault();

    try {
      await http.post("http://localhost:4000/api/hospitals", {
        name: nameValue,
        address: addressValue,
        city: cityValue,
        country: countryValue,
        postcode: postcodeValue,
        taxID: taxIDValue,
      });
      setMessage("Hospital is created");
    } catch (err) {
      setMessage("Ooops... something went wrong");
    }
  };
 */
	const getHospital = async (event) => {
		event.preventDefault();
		try {
			const username = sessionStorage.getItem("user");
			console.log(username);
			const response = await http.get(
				`http://localhost:4000/api/users/username/${username}`
			);
			console.log(response.data[0].hospitals);
			loadHospital(response.data[0].hospitals);
		} catch (err) {
			setMessage("Ooops... something went wrong in get");
		}
	};

	const loadHospital = async (hospitals) => {
		console.log(hospitals);
		let hospitalArray = [];
		try {
			// console.log(id);
			for (const id of hospitals) {
				let response = await http.get(
					`http://localhost:4000/api/users/hospital/id/${id}`
				);
				console.log(response.data[0]);
				hospitalArray.push(response.data[0]);
			}
			setHospitalList(hospitalArray);

			if (hospitals.length === 0) {
				setMessage("No hospitals found for this user.");
			} else {
				setMessage("");
			}

			console.log(hospitalArray);
		} catch (err) {
			setMessage("Ooops... something went wrong in load");
		}
	};

	const createHospital = async (event) => {
		event.preventDefault();
		const data = {
			name: nameValue,
			address: {
				country_code: countryValue,
				post_code: postcodeValue,
				city: cityValue,
				address: addressValue,
			},
			emails: [emailValue],
			taxcode: taxIDValue,
			iban: "string",
			swift: "string",
			account_number: "string",
			phone: "string",
			id: 0,
		};

		http
			.post(
				"http://localhost:4000/api/hospitals/f53c7090-c0aa-11ec-9c9f-0adb4fd9a356",
				data
			)
			.then((res) => console.log(res));
	};

	// const loadHospital = async (event) => {
	//   event.preventDefault();
	//   try {
	//     const user = sessionStorage.getitem("user");
	//     console.log(user);
	//     const result = await http.get("http://localhost:4000/api/hospitals");
	//     console.log(result);
	//     setMessage("Hospitals loaded");
	//   } catch (err) {
	//     setMessage("Ooops... something went wrong");
	//   }
	// };

	return (
		<div className="administration">
			<div id="container">
				<h1>Load linked hospitals data</h1>
				<button className="link" onClick={(event) => getHospital(event)}>
					Load hospitals
				</button>

				<hr />
				<h1>Create new hospital</h1>
				<form>
					<input
						type="text"
						placeholder="name"
						value={nameValue}
						onChange={(e) => setNameValue(e.target.value)}
					/>
					<input
						type="text"
						placeholder="address"
						value={addressValue}
						onChange={(e) => setAddressValue(e.target.value)}
					/>
					<input
						type="text"
						placeholder="city"
						value={cityValue}
						onChange={(e) => setCityValue(e.target.value)}
					/>
					<input
						type="text"
						placeholder="country"
						value={countryValue}
						onChange={(e) => setCountryValue(e.target.value)}
					/>
					<input
						type="text"
						placeholder="postcode"
						value={postcodeValue}
						onChange={(e) => setPostcodeValue(e.target.value)}
					/>
					<input
						type="text"
						placeholder="email"
						value={emailValue}
						onChange={(e) => setEmailValue(e.target.value)}
					/>
					<input
						type="text"
						placeholder="taxID"
						value={taxIDValue}
						onChange={(e) => setTaxIDValue(e.target.value)}
					/>
					<button className="link" onClick={(event) => createHospital(event)}>
						Create new hospital
					</button>
				</form>
				{!hospitalList ? (
					<></>
				) : (
					hospitalList.map((hospital, i) => (
						<Hospital hospital={hospital} key={i} />
					))
				)}
			</div>
		</div>
	);
}

export default Admin;
