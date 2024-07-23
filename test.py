from openai import OpenAI
from rich import print
import time  # To wait for any processing delays

# Initialize OpenAI client
client = OpenAI()

# Retrieve the assistant
my_assistant = client.beta.assistants.retrieve("asst_AfIkOHTtEYLvMSp2zc3xRfmp")
print(my_assistant)

# Create a new thread
empty_thread = client.beta.threads.create()
print(empty_thread)

# Send a message to the assistant in the new thread
thread_message = client.beta.threads.messages.create(
    empty_thread.id, role="user", content="როგორ დავხარჯო ნაკლები დრო?"
)

# Start a run with the assistant in the new thread
run = client.beta.threads.runs.create(
    thread_id=empty_thread.id, assistant_id=my_assistant.id,
)
print(run.to_dict())


# Function to check the run status
def check_run_status(run_id, thread_id):
    run_status = client.beta.threads.runs.retrieve(run_id,thread_id=thread_id)
    return run_status.status

# Loop until the run is finished
while True:
    status = check_run_status(run.id, empty_thread.id)
    if status == 'completed':
        break
    elif status == 'failed':
        print("Run failed.")
        exit()
    time.sleep(1)  # Wait for 1 second before checking again

# Fetch the latest messages in the thread to find the assistant's response
thread_messages = client.beta.threads.messages.list(empty_thread.id)

# Print all messages in the thread to find the assistant's response
for message in thread_messages:
    print(f"Role: {message.role}, Content: {message.content}")