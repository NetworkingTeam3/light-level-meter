reading = 0

def on_forever():
    global reading
    reading = input.light_level()
    led.plot_bar_graph(reading, 255)
    if input.button_is_pressed(Button.A):
        basic.show_number(reading)
basic.forever(on_forever)
