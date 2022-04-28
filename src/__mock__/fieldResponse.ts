export const fields = [
    { "label": "Email address", "type": "email", "isOptional": false, "isHidden": false },
    { "label": "Gender", "type": "radio", "value": ["M (Male)", "F (Female)", "X (Indeterminate/Intersex/Unspecified)"], "isOptional": true },
    { "label": "State", "type": "select", "value": ["NSW", "QLD", "SA", "TAS", "VIC", "WA", "NT", "ACT"], "default": "ACT" },
    { "label": "Contact number", "type": "telephone" },
    { "type": "hidden", "value": 1651067294652, "isHidden": true }
]