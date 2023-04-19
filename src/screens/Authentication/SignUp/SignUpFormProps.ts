import { Validators } from "../../../utils/validators";
import { FormModel } from "../../../components/Form";
import strings from "../../../common/Translation/Translate";
export const SignUpFormProps = (roleList: any): FormModel[] => {
    return [
        {
            label: "First Name *",
            value: "",
            size: "medium",
            autoFocus: true,
            type: "text",
            typeValue: "text",
            variant: "outlined",
            placeholder: "",
            field: "firstName",
            validators: [
                { check: Validators.required, message: "This field is mandatory" },
            ],
            responsive: { xs: 6 },
            required: true,
            sx: {marginBottom: "1rem", marginRight: "10px"},
        },
        {
            label: "Last Name *",
            value: "",
            size: "medium",
            type: "text",
            typeValue: "text",
            variant: "outlined",
            placeholder: "",
            field: "lastName",
            validators: [
                { check: Validators.required, message: "This field is mandatory" },
            ],
            responsive: { xs: 6 },
            required: true,
            sx: {marginBottom: "1rem",  marginLeft: "2.5px"},
        },
        {
            label: "Email ID *",
            value: "",
            size: "medium",
            type: "text",
            typeValue: "text",
            variant: "outlined",
            placeholder: "",
            field: "email",
            validators: [
                { check: Validators.required, message: "This field is mandatory" },
                {
                    check: Validators.email,
                    message: "Please enter a valid email ID",
                },
            ],
            responsive: { xs: 12 },
            required: true,
            sx: {marginBottom: "1rem"},
        },
        {
            label: "Phone Number *",
            value: "",
            size: "medium",
            type: "text",
            typeValue: "text",
            variant: "outlined",
            placeholder: "",
            field: "phone",
            validators: [
                { check: Validators.required, message: "This field is mandatory" },
                {
                    check: Validators.phoneNumber,
                    message: "Please enter a valid phone number",
                },
            ],
            responsive: { xs: 12 },
            required: true,
            sx: {marginBottom: "1rem"},
        },
        {
            label: `${strings.updateProfile_text_pinCode}`,
            value: "",
            size: "medium",
            type: "text",
            typeValue: "text",
            variant: "outlined",
            placeholder: "",
            field: "pinCode",
            validators: [
            ],
            responsive: { xs: 12 },
            required: false,
            sx: {marginBottom: "1rem"},
        },
        {
            label: "Roles *",
            value: "",
            size: "medium",
            type: "drop-down",
            placeholder: "",
            field: "roles",
            validators: [
                { check: Validators.required, message: "This field is mandatory" },
            ],
            responsive: { xs: 12 },
            required: true,
            options: roleList,
            sx: {marginBottom: "1rem"},
        },
        // {
        //     label: `${strings.updateProfile_text_address} *`,
        //     value: "",
        //     size: "medium",
        //     type: "text",
        //     typeValue: "text",
        //     variant: "outlined",
        //     placeholder: "",
        //     field: "address",
        //     validators: [
        //         { check: Validators.required, message: strings.requiredText },
        //     ],
        //     responsive: { xs: 12 },
        //     required: true,
        //     sx: {marginTop: "1rem"},
        // },
        // {
        //     label: `${strings.updateProfile_text_language} *`,
        //     value: "",
        //     size: "medium",
        //     type: "drop-down",
        //     placeholder: "",
        //     field: "language",
        //     validators: [
        //         { check: Validators.required, message: "This field is mandatory" },
        //     ],
        //     responsive: { xs: 4 },
        //     required: true,
        //     // options: language,
        // },
        // {
        //     label: `${strings.updateProfile_text_country} *`,
        //     value: "",
        //     size: "medium",
        //     type: "drop-down",
        //     placeholder: "",
        //     field: "country",
        //     validators: [
        //         { check: Validators.required, message: "This field is mandatory" },
        //     ],
        //     responsive: { xs: 4 },
        //     required: true,
        //     options: country,
        // },
        // {
        //     label: `${strings.updateProfile_text_state} *`,
        //     value: "",
        //     size: "medium",
        //     type: "drop-down",
        //     placeholder: "",
        //     field: "state",
        //     validators: [
        //         { check: Validators.required, message: "This field is mandatory" },
        //     ],
        //     responsive: { xs: 4 },
        //     required: true,
        //     options: states,
        // },
        // {
        //     label: `${strings.updateProfile_text_city} *`,
        //     value: "",
        //     size: "medium",
        //     type: "drop-down",
        //     placeholder: "",
        //     field: "city",
        //     validators: [
        //         { check: Validators.required, message: "This field is mandatory" },
        //     ],
        //     responsive: { xs: 4 },
        //     required: true,
        //     options: cities,
        // },
    ];
};
