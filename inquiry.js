'use strict';
const inquiryForm = document.getElementById('inquiry-form');
const budgetInput = inquiryForm.elements.namedItem('Budget');
budgetInput.addEventListener('input', () => {
  budgetInput.value = budgetInput.value.replace(/[^0-9]/g, '');
});
inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;
  const details = Array.from(new FormData(inquiryForm), ([label, value]) => {
    const amount = value.trim();
    return label === 'Budget'
      ? `Budget (USD): ${amount ? '$' + Number(amount).toLocaleString('en-US') : 'Not specified'}`
      : `${label}: ${amount || 'Not specified'}`;
  }).join('\n\n');
  const subject = 'Content / UGC inquiry — ' + inquiryForm.elements.namedItem('Brand').value.trim();
  document.getElementById('brief').value = details;
  const deliveryForm = document.getElementById('delivery-form');
  deliveryForm.elements.namedItem('_next').value = new URL('/inquiry-thanks.html', window.location.href).href;
  deliveryForm.elements.namedItem('_subject').value = subject;
  deliveryForm.elements.namedItem('email').value = inquiryForm.elements.namedItem('Email').value.trim();
  deliveryForm.elements.namedItem('Brief').value = details;
  document.getElementById('prepared').hidden = false;
  document.getElementById('send-email').focus();
});
// Require a fresh review whenever the visitor changes the inquiry.
inquiryForm.addEventListener('input', () => {
  document.getElementById('prepared').hidden = true;
});
document.getElementById('delivery-form').addEventListener('submit', (event) => {
  if (!inquiryForm.reportValidity() || document.getElementById('prepared').hidden) {
    event.preventDefault();
    return;
  }
  document.getElementById('send-email').disabled = true;
  document.getElementById('send-email').textContent = 'Sending…';
});
window.addEventListener('pageshow', () => {
  document.getElementById('send-email').disabled = false;
  document.getElementById('send-email').textContent = 'Send Email ↗';
});
