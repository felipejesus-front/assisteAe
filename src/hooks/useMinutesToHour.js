import { useEffect, useState } from "react";

function useMinutesToHour(minutos) {
	const [hour, setHour] = useState({});
	useEffect(() => {
		const hours = Math.floor(minutos / 60);
		const minutes = minutos % 60;
		setHour({ hours, minutes });
	}, [minutos]);
	return hour;
}

export default useMinutesToHour;
