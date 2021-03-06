# quetzal
## What is it?
**quetzal** is a Python package providing flexible models for transport planning and traffic forecasting.
## Copyright 
(c) SYSTRA
## License
[CeCILL-B](LICENSE.md)
## Documentation
The official documentation is hosted on https://systragroup.github.io/quetzal
## Backward compatibility
In order to improve the ergonomics, the code may be re-factored and a few method calls may be re-designed. As a consequence, the backward compatibility of the library is not guaranteed. Therefore, the version of quetzal used for a project should be specified in its requirements. 
## Installation from sources
It is preferred to first create and use a virtual environment.
### For Linux
Virtual environment: `virtualenv .venv; source .venv/bin/activate` or any equivalent command.

```bash
pip install -e .
```
### For Windows
`Conda` is supposed to be installed.

`windows-install` creates an environment `quetzal_env` and installs quetzal there
`windows-install-here` installs quetzal in the active environment

To install quetzal in base environment:
-(base): `windows-install-here.bat`

To create quetzal_env automatically and install quetzal:
-(base): `windows-install.bat`

To manage the environments manually and install quetzal:
- (base): `conda install nb_conda_kernels; conda create -n quetzal pip`
- Enable virtual environments in Jupyter `conda activate quetzal_env`
- (quentzal_env) `windows-install-here.bat`



