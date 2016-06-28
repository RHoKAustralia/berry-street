package au.org.berrystreet.familyfinder.api.controller.exception

public class ApiException extends Exception{
	private int code
	public ApiException (int code, String msg) {
		super(msg)
		this.code = code
	}
}
