import { Document } from "mongoose";

export interface IFlight extends Document {
	flightName: string;
}