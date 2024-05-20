import axios from 'axios'

const Base_URL = "http://ymgk-latest.onrender.com/"

const getChaosMapAnalysis = async(chaos_map, formData) => {
    const response = await axios.post(Base_URL + chaos_map + "/", {
        formData
    });
    if (response) {
        return response
    }
}

export default getChaosMapAnalysis