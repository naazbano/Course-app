import dotenv from "dotenv"; 
dotenv.config();

const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY="sk_test_51QvN6mL605vjRlV0Y0PtIsyz0OHyfp1UXxrvqT0eGK9MdYQDoZmZ9lBsfq5k0DvzbzyQj7POCP2IiNdeiSgV2YNz00Rg5EXduX"
export default{
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD,
    STRIPE_SECRET_KEY,
    
}