import os

js_dir = 'c:/Users/Ragul/Downloads/ML-SAAS-main/ML-SAAS-main/js'

replacements = {
    '#4ade80': '#ffffff',
    '#10b981': '#a1a1aa',
    '#2dd4bf': '#d4d4d8',
    'rgba(74, 222, 128': 'rgba(255, 255, 255',
    'rgba(74,222,128': 'rgba(255,255,255',
    'rgba(16, 185, 129': 'rgba(161, 161, 170',
    'rgba(16,185,129': 'rgba(161,161,170',
    'rgba(45, 212, 191': 'rgba(212, 212, 216',
    'rgba(45,212,191': 'rgba(212,212,216',
}

def clean_js_files():
    for root, dirs, files in os.walk(js_dir):
        for file in files:
            if file.endswith('.js'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = content
                    for old_str, new_str in replacements.items():
                        new_content = new_content.replace(old_str, new_str)
                    
                    if new_content != content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated {file}")
                except Exception as e:
                    print(f"Error on {file}: {e}")

if __name__ == '__main__':
    clean_js_files()
