let url = "http://localhost:9191"

export let URL_LOGIN = url + "/login/";
export let URL_SIGN_UP_STUDENT = url + "/signUp/student";
export let URL_SIGN_UP_SUPERVISOR = url + "/signUp/supervisor";
export let URL_SIGN_UP_MONITOR = url + "/signUp/monitor";

//CV
export let URL_DEPOSIT_CV = url + "/save/CV";
export let URL_DOWNLOAD_CV = url + "/get/CV/document";
export let URL_DELETE_CV = url + "/delete/CV"; 
export let URL_ACTIVE_CV = url + "/update/ActiveCV"; 

//Student List
export let URL_GET_ALL_STUDENT_CV_NOT_VALID = url + "/getAll/student/CVActiveNotValid";
export let URL_VALID_CV_ACTIVE = url + "/validate/CV";

//InternshipOffer Form
export let URL_DEPOSIT_INTERNSHIP_OFFER = url + "/save/internshipOffer"
export let URL_VALIDATE_INTERNSHIP_OFFER = url + "/validate/internshipOffer/"

//InternshipOffer List
export let URL_GET_ALL_INTERNSHIP_OFFERS_TO_VALIDATE = url + "/getAll/internshipOffer/unvalidated/"