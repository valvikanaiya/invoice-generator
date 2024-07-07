import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextAreaInput from "../TextAreaInput/TextAreaInput";

import {
  setNotesLabel,
  setNotes,
  setTermsLabel,
  setTerms,
} from "@store/slices/invoice";
import { LabelInputs } from "../Inputs/Inputs";
const InvoiceDescription = () => {
  const { notesLabel, notes, termsLabel, terms } = useSelector(
    (state) => state.invoice
  );

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-2">
        <LabelInputs
          value={notesLabel}
          onChange={(e) => dispatch(setNotesLabel(e.target.value))}
        />
        <TextAreaInput
          value={notes}
          setValue={setNotes}
          onChange={(e) => dispatch(setNotes(e.target.value))}
          placeholder={"Notes - any relavent information not alredy covered"}
        />
      </div>
      <div className="flex flex-col gap-2">
        <LabelInputs
          value={termsLabel}
          onChange={(e) => dispatch(setTermsLabel(e.target.value))}
        />
        <TextAreaInput
          value={terms}
          setValue={setTerms}
          onChange={(e) => dispatch(setTerms(e.target.value))}
          placeholder={
            "Terms and conditions - late fees, payment methods, delevery schedule"
          }
        />
      </div>
    </>
  );
};

export default InvoiceDescription;
