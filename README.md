# BRIEF

Write a function that counts the number of times a string containing comma separated terms is found in a piece of text

The function should be in the form:
`
function findTermInstances(text, terms) => list of terms
`

The terms will be a comma separated string, eg: "Customer, you"

If the term is a pronoun, the system should find any similar pronouns that match:

For example:

`
findTermInstances("You must ensure that your fees are not high", "you") => ["You, your"]
`

The pronouns you should match are:
  1st person singular: I, me, my, mine, myself
  1st person plural: we, us, our, ours, ourselves
  2nd person singular: you, your, yourself

"I" should be case sensitive, the others should not.

You should store the possible pronouns in a data structure, so it is easy to adjust them if necessary.

Some examples:
`
countTermInstances("The Customer is always right", "Customer, you") => ["Customer"]
countTermInstances("The Customer is not our client", "Customer, us") => ["Customer", "our"]
countTermInstances("My rights cannot be abridged by myself, only the Client", "I, Client") => ["My", "myself", "Client"]
countTermInstances("i) In this clause my documents are read", "Me") => ["my"]
`

