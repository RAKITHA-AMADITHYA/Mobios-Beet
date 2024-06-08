import { InputAdornment, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

export default function BeetTxtFeild({
  label,
  name,
  control,
  InputProps,
  type = "text",
  autoComplete,
  onFocus,
  onBlur,
}) {
  return (
    <>
      <Typography variant="caption" ml={1} mb={1}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            helperText={error?.message ? error?.message : " "}
            size="small"
            type={type}
            fullWidth
            InputProps={InputProps}
            autoComplete={autoComplete}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        )}
      />
    </>
  );
}

BeetTxtFeild.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["email", "text", "password", "number", "tel"]),
  InputProps: PropTypes.object,
  autoComplete: PropTypes.string,
  onFocus: PropTypes.func,
  onBlue: PropTypes.func,
};
