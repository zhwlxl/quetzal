import os
from subprocess import Popen, PIPE
import time
import json
import uuid
import shutil

def parallel_call_notebook(
    notebook,
    arg_list,
    stdout_path='out.txt',
    stderr_path='err.txt',
    workers=2,
    sleep=1,
    leave=False,
    errout_suffix=False
):
    os.system('jupyter nbconvert --to python %s' % notebook)
    file = notebook.replace('.ipynb', '.py')
    popens = {}
    
    for i in range(len(arg_list)):
        arg = arg_list[i]
        suffix = arg if errout_suffix else ''
        suffix += '_' + notebook.split('.')[0]
        mode =  'w' if errout_suffix else 'a+'
        print(i, arg)
        with open(stdout_path.replace('.txt', '_' + suffix + '.txt'), mode) as stdout:
            with open(stderr_path.replace('.txt', '_' + suffix + '.txt'), mode) as stderr:

                print(file)
                popens[i] = Popen(
                    ['python', file, arg],
                    stdout=stdout,
                    stderr=stderr
                )
                if (i + 1) % workers == 0 or (i + 1) == len(arg_list):
                    print('waiting')
                    for p in popens.values():
                        p.wait()
        time.sleep(sleep)
    if not leave:
        os.remove(file)
    for i in range(len(arg_list)):
        arg = arg_list[i]
        suffix = arg if errout_suffix else ''
        suffix += '_' + notebook.split('.')[0]
        mode =  'r'
        with open(stderr_path.replace('.txt', '_' + suffix + '.txt'), mode) as stderr:
            content = stderr.read()
            if 'Error' in content and "end_of_notebook" not in content:
                print("subprocess **{} {}** terminated with an error.".format(i, arg))


def parallel_call_python(
    file,
    arg_list,
    stdout_path='out.txt',
    stderr_path='err.txt',
    workers=2,
    sleep=0,
    errout_suffix=False,
    process_name='process',
):
    popens = {}
    notebook = file
    
    for i in range(len(arg_list)):
        arg = arg_list[i]
        suffix = arg if errout_suffix else ''
        suffix += '_' + process_name
        mode =  'w' if errout_suffix else 'a+'
        #print(i, arg)
        with open(stdout_path.replace('.txt', '_' + suffix + '.txt'), mode) as stdout:
            with open(stderr_path.replace('.txt', '_' + suffix + '.txt'), mode) as stderr:
                popens[i] = Popen(
                    ['python', file, arg],
                    stdout=stdout,
                    stderr=stderr
                )
                if (i + 1) % workers == 0 or (i + 1) == len(arg_list):
                    #print('waiting')
                    for p in popens.values():
                        p.wait()
        time.sleep(sleep)
        
        
    for i in range(len(arg_list)):
        arg = arg_list[i]
        suffix = arg if errout_suffix else ''
        suffix += '_' + process_name
        mode =  'r'
        with open(stderr_path.replace('.txt', '_' + suffix + '.txt'), mode) as stderr:
            content = stderr.read()
            if 'Error' in content and "end_of_notebook" not in content:
                print("subprocess **{} {}** terminated with an error.".format(i, arg))
    return popens

def parallel_call_subprocess(
    subprocess_filepath, 
    kwarg_list, 
    dump_kwargs=json.dump, 
    load_result=json.load,
    leave=False,
    *args,
    **kwargs
):
    input_files = []
    output_files = []
    uids = []
    io_strings = []

    if not os.path.exists('subprocess_io/'):
        os.mkdir('subprocess_io')

    for kwarg_dict in kwarg_list:
        uid = str(uuid.uuid4())

        input_file = r'subprocess_io/input' + '-' + uid + '.json'
        output_file = r'subprocess_io/output' + '-' + uid + '.json'
        output_files.append(output_file)

        dump_kwargs(kwarg_dict, input_file)
        io_string = json.dumps({'input_json': input_file, 'output_json': output_file})
        io_strings.append(io_string)   

    parallel_call_python(
        subprocess_filepath, 
        io_strings, 
        errout_suffix=False, 
        stdout_path='subprocess_io/out.txt',
        stderr_path='subprocess_io/err.txt',
        *args,
        **kwargs,
    )
    results = [load_result(file) for file in output_files]
    
    if not leave:
        shutil.rmtree('subprocess_io')
        
    return results