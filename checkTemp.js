function checkTemp(temperatuur)
    {
if (0 <= temperatuur && temperatuur <= 20) return -1;
else if (21 <= temperatuur && temperatuur <= 40) return 0; 
    else if (41 <= temperatuur && temperatuur <= 60) return 1;
}
