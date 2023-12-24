export function handlePending(state) {
  state.isLoading = true;
}

export function handleFulfilled(state, action) {
  state.isLoading = false;
  state.contacts = action.payload;
  state.error = null;
}

export function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export function addContact(state, action) {
  state.contacts.push(action.payload);
}

export function deleteContact(state, action) {
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload
  );
}
