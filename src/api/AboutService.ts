import axios from "axios";

const BASE_URL = "http://localhost:3333";

export class AboutService {
    static getSkills() {
        return axios.get(`${BASE_URL}/skill`);
    }
}