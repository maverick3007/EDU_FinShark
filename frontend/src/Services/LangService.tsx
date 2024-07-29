import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "http://localhost:5167/api/";
export const changeLang = async (
    user: object,
    lang: string,
) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/changeLang", {
            user: user,
            lang: lang,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};
