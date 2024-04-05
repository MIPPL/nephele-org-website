import os
import re

def search_replace_contents_and_rename_files(directory, replacements, text_file_extensions, binary_file_extensions, exclusions):
    for dirpath, dirnames, files in os.walk(directory):
        for name in files:
            filepath = os.path.join(dirpath, name)
            original_name = name  # Keep track of the original file name

            # Determine if the file is a text file or binary file
            is_text_file = any(name.lower().endswith(ext) for ext in text_file_extensions)
            is_binary_file = any(name.lower().endswith(ext) for ext in binary_file_extensions)

            if is_text_file:
                # Process text file: Read, possibly modify content, and rename
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()

                # Apply replacements with exclusions for file content
                for search_text_upper, replace_text_upper, search_text_lower, replace_text_lower in replacements:
                    content = re.sub(
                        rf'\b{search_text_upper}\b(?!scan)',
                        lambda match: replace_text_upper if match.group(0) not in exclusions else match.group(0),
                        content,
                        flags=re.IGNORECASE
                    )

                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(content)
                print(f"Updated content in: {filepath}")

            # Rename file, applicable for both text and binary files
            new_name = original_name
            for search_text_upper, replace_text_upper, search_text_lower, replace_text_lower in replacements:
                new_name = re.sub(
                    rf'\b{search_text_upper}\b(?!scan)',
                    lambda match: replace_text_upper if match.group(0) not in exclusions else match.group(0),
                    new_name,
                    flags=re.IGNORECASE
                )
            
            if new_name != original_name:
                new_filepath = os.path.join(dirpath, new_name)
                os.rename(filepath, new_filepath)
                print(f"Renamed file: {filepath} to {new_filepath}")

# Example usage
directory_to_search = '.'  # Adjust to your directory path
text_file_extensions = ['.md', '.json', '.tsx', '.ts']  # Extend as needed for text files
binary_file_extensions = ['.png']  # Add more binary file extensions if needed
replacements = [
    ('Ethereum', 'Nephele', 'ethereum', 'nephele'),
    ('ETH', 'NEPH', 'eth', 'neph'),
    ('Ether', 'Nephele', 'ether', 'nephele')
]
exclusions = ['etherscan']

search_replace_contents_and_rename_files(directory_to_search, replacements, text_file_extensions, binary_file_extensions, exclusions)
