export interface RentalDetail{
    rentId: number;
    customerId: number;
    firstName: string;
    lastName: string;
    brandName: string;
    companyName: string;
    carId: number;
    rentDate: Date;
    returnDate?: Date;
}