import { toast } from "react-hot-toast";

export function toastSuccess(toasterText: string) {
    toast.success(toasterText, {
        duration: 3000,
        iconTheme: {
            primary: "#000091",
            secondary: "#FFFAEE",
        },
        style: {
            border: "1px solid #000091",
            color: "#000091",
            fontSize: "20px",
            padding: "16px",
        },
    });
}

export function toastError(toasterText: string) {
    toast.error(toasterText, {
        duration: 3000,
        iconTheme: {
            primary: "#d64d00",
            secondary: "#FFFAEE",
        },
        style: {
            border: "1px solid #d64d00",
            color: "#d64d00",
            fontSize: "18px",
            padding: "12px",
        },
    });
}

export function toastPromise(
    funcPromise: Promise<unknown>,
    {
        loading,
        success,
        error,
    }: { success: string; loading: string; error: string }
) {
    toast.promise(
        funcPromise,
        { loading, success, error },
        {
            duration: 3000,
            iconTheme: {
                primary: "#000091",
                secondary: "#FFFAEE",
            },
            style: {
                border: "1px solid #000091",
                color: "#000091",
                fontSize: "20px",
                padding: "16px",
            },
        }
    );
}
