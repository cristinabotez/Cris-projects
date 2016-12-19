# problem statement

Create a simple tip calculator. The program should prompt
for a bill amount and a tip rate. The program must compute
the tip and then display both the tip and the total amount of
the bill.

*nouns
    bill amount
    tip rate
    tip
    total amount
    
*verbs
    prompt
    compute
    display
    
*example output
what is the bill? $200
what is the tip percentage? 15
the tip is $30.00
the total is $230.00

# discovering inputs, processes and outputs

• Inputs: bill amount, tip rate
• Processes: calculate the tip
• Outputs: tip amount, total amount

driving designs with tests (TDD)
Inputs:
bill amount: 10
tip rate: 15
Expected result:
Tip: $1.50
Total: $11.50

# Writing the algorithm in pseudocode
TipCalculator
    Initialize billAmount to 0
    Initialize tip to 0
    Initialize tipRate to 0
    Initialize total to 0
    
    Prompt for billAmount with "What is the bill amount?"
    Prompt for tipRate with "What is the tip rate?"
    
    convert billAmount to a number
    convert tipRate to a number

    tip = billAmount * (tipRate / 100)
    round tip up to nearest cent
    total = billAmount + tip

    Display "Tip: $" + tip
    Display "Total: $" + total

    End
    
#Writing the Code
    ##Constraints
    • Enter the tip as a percentage. For example, a 15% tip
    would be entered as 15, not 0.15. Your program should
    handle the division.
    • Round fractions of a cent up to the next cent.
    
#Challenges
• Ensure that the user can enter only numbers for the bill
amount and the tip rate. If the user enters non-numeric
values, display an appropriate message and exit the
program. Here’s a test plan as an example:

Input:
bill amount: abcd
tip rate: 15
Expected result: Please enter a valid number for
the bill amount.

• Instead of displaying an error message and exiting the
program, keep asking the user for correct input until it
is provided.
• Don’t allow the user to enter a negative number.
• Break the program into functions that do the computations.
• Implement this program as a GUI program that automatically
updates the values when any value changes.
• Instead of the user entering the value of the tip as a
percentage, have the user drag a slider that rates satisfaction
with the server, using a range between 5% and
20%.

