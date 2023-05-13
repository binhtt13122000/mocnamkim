import { format } from "date-fns";

export const getTimeFromStringDate = (dateText: string) => {
    if (dateText == null) {
        return null;
    }
    try {
        let dateConvert = new Date(dateText);
        let timeText = format(dateConvert, "MM/dd/yyyy HH:mm:ss");
        return timeText;
    } catch (e) {
        return e;
    }
};

export interface GraphQLErrorType extends Error {
    response: {
        status: number;
        errors: Array<{
            message: string;
            extensions: {
                path: string;
                code: string;
            };
        }>;
    };
}

export interface IForm<T> {
    data: T;
    opened: boolean;
    handleClose: (type: "SAVE" | "CANCEL", data?: T, callback?: () => void) => void;
    isView?: boolean;
}
