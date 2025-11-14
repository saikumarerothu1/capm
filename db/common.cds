namespace ust.saikumar.erothu.resuse;


type Gender : String(1) enum{
    male = 'M';
    female = 'F';
    undisclosed = 'U';
};

type PhoneNumber: String(30)@assert.format : '^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$';
type Email: String(255)@assert.format : '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';