import { toast } from "react-hot-toast";

export default function toastSuccess(toasterText: string) {
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
