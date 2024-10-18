import conf from "@/config/config";
import { Client,Account,ID } from "appwrite";

type CreateUserAcount = {
    email: string;
    password: string;
    name: string;
    };

    type LoginUserAccount = {
    email: string;
    password: string;
    };


