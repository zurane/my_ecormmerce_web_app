import React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

export default function Support() {
  return (
    <div className="help-section-container">
      <h4>Help section</h4>
      <div className="help-section-content">
        <AccordionGroup sx={{ maxWidth: 600 }} variant="outlined">
          <Accordion>
            <AccordionSummary>Standard delivery</AccordionSummary>
            <AccordionDetails>
              ETA is 3-5 business days and costs R25.00 (Free for orders over
              R500.00). Our standard delivery service ensures your items arrive
              within 3-5 business days. Orders placed before 3 PM are processed
              on the same day.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Express delivery</AccordionSummary>
            <AccordionDetails>
              ETA is 1-2 business days at a cost of R100.00. For those who need
              their items urgently, our express delivery option guarantees
              arrival within 1-2 business days. Orders must be placed before 1
              PM for same-day processing.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Collection</AccordionSummary>
            <AccordionDetails>
              Available within 72 hours of order confirmation. You must place
              your order online and pick it up from your nearest store. You will
              receive an email notification when your order is ready for pickup.
              Please bring a valid ID and your order confirmation email.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Delivery Tracking</AccordionSummary>
            <AccordionDetails>
              Once your order is dispatched, you will receive an email with a
              tracking number. You can use this number to track your package in
              real-time on our website or the courier’s website.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </div>
    </div>
  );
}
