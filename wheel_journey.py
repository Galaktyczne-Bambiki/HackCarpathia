import pynmea2
import serial
import mpu6050

mpu6050 = mpu6050.mpu6050(0x68)
ser = serial.Serial('/dev/ttyAMA0', 9600, timeout=5.0)
streamreader = pynmea2.NMEAStreamReader()

while True:
    try:
        gpsdata = ser.readline().decode('utf-8')
    except UnicodeDecodeError:
        gpsdata = ser.readline().decode('utf-8')

    for gps_msg in streamreader.next(gpsdata):
        if isinstance(gps_msg, pynmea2.nmea.ProprietarySentence):
            continue
        else:
            if gps_msg.sentence_type == 'GGA':
                latitude = gps_msg.latitude
                longitude = gps_msg.longitude
                accel = mpu6050.get_accel_data()
                print(f'AX: {accel["x"]:.2f} AY: {accel["y"]:.2f} AZ: {accel["z"]:.2f} LAT: {latitude} LON: {longitude}')
