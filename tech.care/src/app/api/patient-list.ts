import axios from "axios";

export default function getPatients() {
  const patients = axios.get(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      auth: {
        username: "coalition",
        password: "skills-test",
      },
    }
  );
  return patients;
}
